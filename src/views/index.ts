import useLayouts from "./layout";
import useScreens from "./screens";

const useViews = () => {
    return {
        useLayouts,
        useScreens,
    };
};

export default useViews;
