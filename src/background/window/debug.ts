import { t } from "@/common/i18n";
import { Notification } from "electron";
import { loadAppSetting } from "@/background/settings";
import { cropPieceImage } from "@/background/image/cropper";
import { updateAppSetting, sendError } from "./ipc";
import { PieceImageType } from "@/common/settings/app";

export function refreshCustomPieceImages() {
  (async () => {
    const appSettings = await loadAppSetting();
    if (appSettings.pieceImage !== PieceImageType.CUSTOM_IMAGE || !appSettings.pieceImageFileURL) {
      sendError(new Error("No custom piece image is in use."));
      return;
    }
    await cropPieceImage(appSettings.pieceImageFileURL, {
      deleteMargin: appSettings.deletePieceImageMargin,
      overwrite: true,
    });
    updateAppSetting({
      croppedPieceImageQuery: `updated=${Date.now()}`,
    });
  })().catch((e) => {
    sendError(e);
  });
}

export function sendTestNotification() {
  new Notification({
    title: t.electronShogi,
    body: t.thisIsTestNotification,
  }).show();
}