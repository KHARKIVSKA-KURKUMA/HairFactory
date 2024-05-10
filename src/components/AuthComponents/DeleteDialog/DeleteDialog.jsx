import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const DeleteDialog = ({ open, onClose, onAgree, id }) => {
  const { t } = useTranslation();
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {t("deleteDialog.title")}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {t("deleteDialog.descr")}
        </DialogContentText>
        <ol>
          <li> {t("deleteDialog.item1")}</li>
          <li>{t("deleteDialog.item2")}</li>
          <li>{t("deleteDialog.item3")}</li>
        </ol>
        <DialogContentText>{t("deleteDialog.context")}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}> {t("deleteDialog.disagree")}</Button>
        <Button onClick={() => onAgree(id)}>{t("deleteDialog.agree")}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
