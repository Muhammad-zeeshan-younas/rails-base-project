// Load all the controllers within this directory and all subdirectories.
// Controller files must be named *_controller.js.

import { Application } from "stimulus";
import ModalController from "./modal_controller";
import CarouselController from "./carousel_controller";

const application = Application.start();

application.register("modal", ModalController);
application.register("carousel", CarouselController);
