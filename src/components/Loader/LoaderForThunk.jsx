import { Oval } from "react-loader-spinner";
import styled from "styled-components";
import { lightOrange, lightRed } from "../../utils/colors";
import { useTranslation } from "react-i18next";

const LoaderWrap = styled.div`
  min-height: calc(100vh - 300px);
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

const LoaderForThunk = () => {
  const { t } = useTranslation();
  return (
    <LoaderWrap>
      <Oval
        height={80}
        width={80}
        color={lightOrange}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor={lightRed}
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
      <p> {t("loader")}</p>
    </LoaderWrap>
  );
};

export default LoaderForThunk;
