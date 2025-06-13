export interface SwitchProps {
  current: {
    trackBg: string;
    knobSize: string;
    knobTranslate: string;
    knobInnerSize: string;
    knobInnerBg: string;
  };
  toggle: () => void;
  isAnimating: boolean;

  disabled?: boolean;
}
