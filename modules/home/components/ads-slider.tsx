import { Slider, SliderItem } from '~/components/slider';
import { THEME } from '~/constants';

export const AdsSlider = () => {
  return (
    <Slider>
      <SliderItem
        style={{ justifyContent: 'space-between', backgroundColor: THEME.colors.neutral[200] }}>
        <></>
      </SliderItem>
      <SliderItem
        style={{ justifyContent: 'space-between', backgroundColor: THEME.colors.neutral[200] }}>
        <></>
      </SliderItem>
      <SliderItem
        style={{ justifyContent: 'space-between', backgroundColor: THEME.colors.neutral[200] }}>
        <></>
      </SliderItem>
    </Slider>
  );
};
