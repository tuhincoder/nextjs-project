
const DynamicPage = ({ params, searchParams }) => {
    console.log(params, searchParams);
    return (
        <div>
            <h2>this is dynamic page :{params.id}</h2>
            <h1>category: {searchParams.category}</h1>
            <h1>price: {searchParams.price}</h1>
        </div>
    );
};

export default DynamicPage;