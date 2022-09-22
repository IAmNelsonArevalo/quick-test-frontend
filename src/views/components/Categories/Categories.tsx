import {FC, useEffect, useState} from "react";
import {Box, Paper, Modal} from "@mui/material";
/** Assets */
import GoldTrophy from "assets/images/gold-trophy.png";
import SilverTrophy from "assets/images/silver-trophy.png";
import BronzeTrophy from "assets/images/bronze-trophy.png";
import useControllers from "controllers";

const Categories: FC<{items: any}> = ({items}): JSX.Element => {
    /** Controllers */
    const {useScreenHooks} = useControllers();
    const {useGeneral} = useScreenHooks();
    const {width} = useGeneral();

    /** States */
    const [goldTotal, setGoldTotal] = useState<number>(0);
    const [silverTotal, setSilverTotal] = useState<number>(0);
    const [bronzeTotal, setBronzeTotal] = useState<number>(0);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [type, setType] = useState<string>("");

    const array: Array<string> = ["Oro", "Plata", "Bronce"];

    /** Handlers */
    const getTotals = () => {
        let gold = 0;
        let silver = 0;
        let bronze = 0;
        items.map((item: any) => {
            gold += item.gold;
            silver += item.silver;
            bronze += item.bronze;
        });
        setGoldTotal(gold);
        setSilverTotal(silver);
        setBronzeTotal(bronze);
    };

    const handleOpenModal = (type: string) => {
        setOpenModal(true);
        setType(type);
    };

    useEffect(() => {
        getTotals();
    }, []);
    return (
        <div
            className={`${
                width > 991
                    ? "flex justify-center gap-4 my-[30px]"
                    : "my-[30px] flex flex-col justify-center items-center"
            }`}>
            {array.map((item: string, key: number) => (
                <Paper
                    elevation={4}
                    className={`${width < 991 ? "my-[10px] w-[300px]" : ""}`}
                    onClick={() => handleOpenModal(item)}>
                    <Box sx={{width: 300, height: 150, p: 2}} key={key}>
                        <div className="flex justify-center">
                            <img
                                src={
                                    item === "Oro"
                                        ? GoldTrophy
                                        : item === "Plata"
                                        ? SilverTrophy
                                        : BronzeTrophy
                                }
                                width={50}
                            />
                        </div>
                        <div className="flex justify-center mt-[10px]">
                            <span className="text-center">{item}</span>
                        </div>
                        <div className="flex justify-center mt-[5px]">
                            <span className="font-bold">
                                Total trofeos:{" "}
                                {item === "Oro"
                                    ? goldTotal
                                    : item === "Plata"
                                    ? silverTotal
                                    : bronzeTotal}
                            </span>
                        </div>
                    </Box>
                </Paper>
            ))}

            <Modal
                open={openModal}
                onClose={() => {
                    setType("");
                    setOpenModal(false);
                }}>
                <Paper elevation={4}>
                    <Box
                        sx={{
                            position: "absolute" as "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: 400,
                            bgcolor: "background.paper",
                            p: 2,
                        }}>
                        <div className="flex justify-end">
                            <span
                                className="font-bold cursor-pointer"
                                onClick={() => {
                                    setType("");
                                    setOpenModal(false);
                                }}>
                                X
                            </span>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src={
                                    type === "Oro"
                                        ? GoldTrophy
                                        : type === "Plata"
                                        ? SilverTrophy
                                        : BronzeTrophy
                                }
                                width={50}
                            />
                        </div>
                        <div className="flex justify-center mt-[10px]">
                            <span className="text-center font-bold">{type}</span>
                        </div>
                        <div className="flex justify-center my-[10px]">
                            {type === "Oro" ? (
                                <span className="text-justify">
                                    Las medallas olímpicas están entre las más
                                    conocidas del mundo. Se trata de las preseas
                                    que obtienen los deportistas que logran
                                    alcanzar el podio en una competencia de un
                                    Juego Olímpico. Mientras que el ganador
                                    recibe una medalla de oro, quien finaliza en
                                    el segundo lugar consigue una medalla de
                                    plata. Aquel que termina en el tercer
                                    puesto, en tanto, gana una medalla de
                                    bronce.
                                </span>
                            ) : type === "Plata" ? (
                                <span className="text-justify">
                                    Una medalla de plata es una medalla que se
                                    otorga al competidor o competidora que queda
                                    en segunda posición de una competición. En
                                    los primeros Juegos Olímpicos modernos el
                                    campeón recibía la medalla de plata y el
                                    subcampeón, la de bronce.
                                </span>
                            ) : (
                                <span className="text-justify">
                                    Una medalla de bronce es una medalla que se
                                    otorga al tercer clasificado de diversas
                                    competiciones como los Juegos Olímpicos. Los
                                    que acaban en primer y segundo lugar
                                    reciben, respectivamente, medalla de oro y
                                    medalla de plata. En los primeros Juegos
                                    Olímpicos modernos el campeón recibía la
                                    medalla de plata y el subcampeón la de
                                    bronce.
                                </span>
                            )}
                        </div>
                    </Box>
                </Paper>
            </Modal>
        </div>
    );
};

{
    /* <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description">
    <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{mt: 2}}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
    </Box>
</Modal>; */
}

export default Categories;
