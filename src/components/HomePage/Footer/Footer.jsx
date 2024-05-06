import { IoLocationOutline } from "react-icons/io5";
import { BsEnvelopeOpen } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import { CiClock1 } from "react-icons/ci";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";
import {
  Container,
  Title,
  Wrap,
  MapWrap,
  Map,
  SocialItem,
  SocialLink,
  SocialList,
  Desk,
  Details,
  Link,
  Address,
} from "./Footer.styled";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Wrap>
        <Title>{t("home.footer.title")}</Title>
        <Address>
          <Desk>{t("home.footer.city")}</Desk>
          <Details>
            <IoLocationOutline size={25} />
            {t("home.footer.address")}
          </Details>
          <ul>
            <li>
              <Desk>{t("home.footer.mail")}</Desk>
              <Link href="mailto:info@example.com">
                <BsEnvelopeOpen size={20} />
                info@example.com
              </Link>
            </li>
            <li>
              <Desk>{t("home.footer.number")}</Desk>
              <Link href="tel:+380991111111">
                <FaPhone size={20} />
                +38 099 111 11 11
              </Link>
            </li>
          </ul>
          <Desk>{t("home.footer.mode")}</Desk>
          <Details>
            <CiClock1 size={25} />
            {t("home.footer.time")}
          </Details>
        </Address>
        <SocialList>
          <SocialItem>
            <SocialLink href="">
              <FaTelegramPlane color="#2ca5e0" size={25} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink href="#">
              <FaInstagram color="#e4405f" size={25} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink href="#">
              <FaFacebookF color="#1877f2" size={25} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink href="#">
              <FaLinkedin color="#1877f2" size={25} />
            </SocialLink>
          </SocialItem>
        </SocialList>
      </Wrap>
      <MapWrap>
        <Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.3254198093696!2d36.28049842236776!3d50.04273496836512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a71d9fca861d%3A0xa501bb6d97670b53!2z0J3QsNGG0ZbQvtC90LDQu9GM0L3QuNC5INCw0LXRgNC-0LrQvtGB0LzRltGH0L3QuNC5INGD0L3RltCy0LXRgNGB0LjRgtC10YIg0ZbQvC4g0JwuINCELiDQltGD0LrQvtCy0YHRjNC60L7Qs9C-ICLQpdCw0YDQutGW0LLRgdGM0LrQuNC5INCw0LLRltCw0YbRltC50L3QuNC5INGW0L3RgdGC0LjRgtGD0YIi!5e0!3m2!1suk!2scz!4v1669065848714!5m2!1suk!2scz"
          width="600"
          height="518"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></Map>
      </MapWrap>
    </Container>
  );
};

export default Footer;
