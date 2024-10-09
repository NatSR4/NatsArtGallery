//Card for posts in card carousel, atm only support for images and no backend
import Image from 'next/image';
import '../css/carousel.css'


type imageData = {
    url: string,
    name: string,
    date: string,
    id: number,
};

export default function ImageCards(props: imageData) {
    return (
        <>
            <div id='imagecard'>
                <Image src={props.url} alt={props.name} width={100} height={150} />
                <h3>{props.name}</h3>   
                <p>{props.date}</p>
            </div>
        </>
    );
}