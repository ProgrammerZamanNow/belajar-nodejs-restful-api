import {web} from "./application/web.js";
import {logger} from "./application/logging.js";

web.listen(3000, () => {
    logger.info("App start");
});
