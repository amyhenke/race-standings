import { Cloudinary } from "@cloudinary/url-gen/index";
import { fill } from "@cloudinary/url-gen/actions/resize";

export const cloudinary = new Cloudinary({
    cloud: {
        cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
    },
});
