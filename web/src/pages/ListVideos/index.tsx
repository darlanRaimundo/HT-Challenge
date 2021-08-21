import Layout from "../../components/Layout";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Paper } from '@material-ui/core';
import { fbFirestore } from '../../services/firebase';

interface IListVideosProps {
  path?: string
}

type Video = {
    id: string;
    createdAt: Date;
    numberOfParts: number;
}

const ListVideos : React.FC<IListVideosProps> = () => {

    const arrVideos: any = []
    fbFirestore.collection("videos").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            arrVideos.push(doc.data())
        });
    });

    const newArrVideos = arrVideos.map((video: any) => video);
    console.log(newArrVideos)

    return (
        <Layout title="HT-Challenge - Lista de Vídeos cortados">
            <Box
            width="1000px"
            height="1000px"
            >   <Paper >
                <TableContainer >
                <Table size="small" aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Id do Vídeo</TableCell>
                        <TableCell align="right">Data de Envio</TableCell>
                        <TableCell align="right">Quantidade de Cortes</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>

                    {arrVideos.map((video:any) => (
                        <TableRow key={video.id}>
                        <TableCell component="th" scope="row">
                            {video.createdAt}
                        </TableCell>
                        <TableCell align="right">{video.numberOfParts}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer></Paper>
            </Box>
        </Layout>
    );

}

export default ListVideos;