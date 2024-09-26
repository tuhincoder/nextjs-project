import Image from "next/image";
import personalImg from '@/assets/tuhinF-removebg-preview.png'


const AlbumPage = () => {
    return (
        <div>
            <Image src={personalImg} alt="personal image" />
        </div>
    );
};

export default AlbumPage;