import { Triangle } from "react-loader-spinner";
import styled from "styled-components";
import { lightOrange } from "../../utils/colors";
import { useTranslation } from "react-i18next";

const LoaderWrap = styled.div`
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  p {
    font-size: 40px;
    font-family: "Pacifico", cursive;
  }
`;

const Loader = () => {
  const { t } = useTranslation();
  return (
    <LoaderWrap>
      <Triangle
        height="120"
        width="120"
        color={lightOrange}
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName="loaderWrap"
        visible={true}
      />
      <p> {t("loader")}</p>
    </LoaderWrap>
  );
};

export default Loader;
