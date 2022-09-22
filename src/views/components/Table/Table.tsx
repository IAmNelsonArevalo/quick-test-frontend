import {FC, useEffect, useState} from "react";
import {
    Table as TableMui,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Pagination,
    TableContainer,
} from "@mui/material";
import _ from "lodash";
import useControllers from "controllers";

const Table: FC<{items: Array<any>}> = ({items}): JSX.Element => {
    const heads: Array<string> = [
        "Atleta",
        "Edad",
        "País",
        "Año",
        "Fecha",
        "Deporte",
        "Oro",
        "Plata",
        "Bronce",
        "Total",
    ];

    /** States */
    const [page, setPage] = useState<number>(1);
    const [newData, setNewData] = useState<any[]>([]);
    const [totalPage, setTotalPag] = useState<number>(0);


    /** Handlers */
    const onChangePage = (e: any, newPage: number) => {
        perPage(e.target.innerText);
    }

    const perPage = (pageNumber?: string) => {
        const pageProp: string = pageNumber !== undefined ? pageNumber : page.toString();
        if(pageNumber !== undefined) {
            setPage(parseInt(pageNumber));
        }

        setTotalPag(Math.ceil(items.length / 10));
        const newItems = items.slice((parseInt(pageProp) - 1) * 10, parseInt(pageProp) * 10)

        setNewData(newItems);
    }

    /** Controllers */
    const {useScreenHooks} = useControllers();
    const {useGeneral} = useScreenHooks();
    const {width} = useGeneral();

    useEffect(() => {
        perPage();
    }, []);

    return (
        <div>
            <TableContainer className={`flex ${width > 991 ? "justify-center" : ""} w-full`}>
                <TableMui sx={{width: width > 991 ? "80%" : "100%", mt: 5}}>
                    <TableHead>
                        <TableRow>
                            {_.map(heads, (item: string, index: number) => (
                                <TableCell key={index}>{item}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {_.map(newData, (item: any, index: number) => (
                            <TableRow key={index} hover>
                                <TableCell>{item.athlete}</TableCell>
                                <TableCell>{item.age}</TableCell>
                                <TableCell>{item.country}</TableCell>
                                <TableCell>{item.year}</TableCell>
                                <TableCell>{item.date}</TableCell>
                                <TableCell>{item.sport}</TableCell>
                                <TableCell>{item.gold}</TableCell>
                                <TableCell>{item.silver}</TableCell>
                                <TableCell>{item.bronze}</TableCell>
                                <TableCell>{item.total}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </TableMui>
            </TableContainer>
            <div className="flex justify-center w-full">
                <Pagination
                    sx={{my: 2}}
                    count={totalPage}
                    variant="outlined"
                    color="primary"
                    onChange={onChangePage}
                />
            </div>
        </div>
    );
};

export default Table;
