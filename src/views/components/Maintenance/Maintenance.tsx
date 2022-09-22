import {FC} from "react";
/** Assets */
import MaintenanceImage from "assets/images/maintenance.png";
import useControllers from "controllers";

const Maintenance: FC = (): JSX.Element => {
    /** Controllers */
    const {useScreenHooks} = useControllers();
    const {useGeneral} = useScreenHooks();
    const {width} = useGeneral();

    return (
        <div className="flex justify-center">
            <img src={MaintenanceImage} alt="" width={width > 991 ? "80%" : "100%"} />
        </div>
    );
};

export default Maintenance;
