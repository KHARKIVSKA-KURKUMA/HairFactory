import { useTranslation } from "react-i18next";
import { locales } from "../../../utils/locales";
import { Item, Link, List } from "./LangSwitcher.styled";
import { lightRed } from "../../../utils/colors";

const LangSwitcher = ({ isDesktop }) => {
  const { i18n } = useTranslation();
  return (
    <List isDesktop={isDesktop}>
      {Object.keys(locales).map((locale) => (
        <Item key={locale}>
          <Link
            style={{
              fontWeight: i18n.resolvedLanguage === locale ? "bold" : "normal",
              color: i18n.resolvedLanguage === locale && lightRed,
            }}
            isDesktop={isDesktop}
            type="submit"
            onClick={() => i18n.changeLanguage(locale)}
          >
            {locales[locale].title}
          </Link>
        </Item>
      ))}
    </List>
  );
};

export default LangSwitcher;
