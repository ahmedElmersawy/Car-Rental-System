const express = require("express");
const vehicleRouter = express.Router();
const vehicleController = require("../controllers/vehicles");
const authorize = require("../middlewares/authorize");
const upload = require("../controllers/upload");

const multer = require("multer");         var uploader = multer({
  storage: multer.diskStorage({}),
  limits: { fileSize: 500000 },
});

vehicleRouter.post(
  "/",
  uploader.single("file"),
  authorize.checkToken,
  authorize.checkRenter,
  upload.uploadHandlerVehicles,
  vehicleController.addNewVehicle
);
vehicleRouter.get("/", vehicleController.listVehicle);
vehicleRouter.get(
  "/renter",
  authorize.checkToken,
  authorize.checkRenter,
  vehicleController.listVehicleByRenterId
);
vehicleRouter.get("/:id", vehicleController.vehicleDetail);
vehicleRouter.delete(
  "/",
  authorize.checkToken,
  authorize.checkRenter,
  vehicleController.delVehicleById
);
vehicleRouter.patch(
  "/:id",
  authorize.checkToken,
  authorize.checkRenter,
  upload.uploadHandlerVehicles,
  vehicleController.updateVehicles
);

module.exports = vehicleRouter;
