import Icon from "../atoms/Icon";
import * as ICON from "../../configs/icon";

export default function SpecialIcon() {
  return (
    <Icon size="big">
      <img className="w-[66px] h-[66px]" src={ICON.BigArrow} />
    </Icon>
  );
}
