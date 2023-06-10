import {web} from "./application/web.js";
import {logger} from "./application/logging.js";

web.listen(300, () => {
    logger.info("App start");
});
