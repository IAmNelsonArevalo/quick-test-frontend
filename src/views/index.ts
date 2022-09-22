import useComponents from "./components";
import useLayouts from "./layout";
import useScreens from "./screens";

const useViews = () => {
    return {
        useLayouts,
        useScreens,
        useComponents,
    };
};

export default useViews;
