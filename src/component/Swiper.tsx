      import { useRef, useImperativeHandle, forwardRef } from "react";
      import { Carousel } from "antd";
      import type { CarouselRef } from "antd/es/carousel"; // 引入 CarouselRef 类型
      import type { Banner } from "../ts/Type/component/Swiper";
      
export interface SwiperRef {
  prev: () => void;
  next: () => void;
}
      export default forwardRef(function Swiper(
        {
          datalist,
          width,
          height,
          className,
        }: {
          datalist: Banner[];
          width: string;
          height: string;
          className?: string;
        },
        ref
      ) {
        const carousel_ref = useRef<CarouselRef>(null); // 使用正确的 CarouselRef 类型
      
        const next = () => {
          carousel_ref.current?.next();
        };
      
        const prev = () => {
          carousel_ref.current?.prev();
        };
      
        // 暴露方法给父组件
        useImperativeHandle(ref, () => ({
          next,
          prev,
        }));
      
        return (
          <Carousel
            ref={carousel_ref}
            className={className}
            draggable={true}
            autoplay
          >
            {datalist?.map((data: Banner, index: number) => (
              <img width={width} height={height} key={index} src={data.imageUrl} />
            ))}
          </Carousel>
        );
      });