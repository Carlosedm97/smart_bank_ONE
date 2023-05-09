import React from "react";
import { Box, Btn } from '../UI'
import { lista } from '../../info';
import Card from "../Card/Card";

const List = () => {
    return <Box>
        {
            lista.cargos.map((cargo, index) => {
                return <Card key={index} data={cargo}>
                    
                </Card>
            })
        }
        <Btn>Ver más</Btn>
    </Box>
}

export default List;