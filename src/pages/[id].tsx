import {useRouter} from "next/router";
import { useEffect, useState } from "react";
import {Header, Loading} from "../components"
import {apiNoticia} from "../api/data";
import {INoticia} from "../interfaces/Noticia.Interface";
import {Table} from "../styles";
import { time } from "console";

export default function Id() {
  const [IsLoading, setIsLoading] = useState(true);
  const [noticia, setNoticia] = useState<INoticia[]>([]);
  const router = useRouter();

  useEffect(()=>{
    const fetchData = async () => {
        const response = await apiNoticia.show(router.query.id as string);
        setNoticia(response.data);
        setIsLoading(false);
      };
      fetchData();
  },[router.query.id]);
  return (
    <>
        {IsLoading ? (  
            <Loading /> 
        ) : (
            <>
                <Header />
                <div className="container">
                    <Table>
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                time && time.map((item)=>(
                                    <tr key={item.id}>
                                        <td>{item.titulo}</td>
                                        <td>{item.descricao}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
            </>
        )}
    </>
  );
}
