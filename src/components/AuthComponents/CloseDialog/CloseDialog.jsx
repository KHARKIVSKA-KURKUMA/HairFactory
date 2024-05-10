import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const CloseDialog = ({ open, onClose, handleLogout }) => {
  const { t } = useTranslation();
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {t("logoutDialog.descr")}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}> {t("logoutDialog.disagree")}</Button>
        <Button onClick={handleLogout} autoFocus>
          {t("logoutDialog.agree")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CloseDialog;
