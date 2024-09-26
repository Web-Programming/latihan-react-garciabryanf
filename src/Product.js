import React from "react";

function Product() {
    const products = [
        { 
            id: "P001", 
            nama: "Asus", 
            harga: 8000000, 
            deskripsi: "Laptop Asus dengan performa tinggi.", 
            urlFoto: "img/Asus.jpg" 
        },
        { 
            id: "P002", 
            nama: "Acer", 
            harga: 7000000, 
            deskripsi: "Laptop Acer dengan desain elegan.", 
            urlFoto: "img/Acer.jpg" 
        },
        { 
            id: "P003", 
            nama: "Lenovo", 
            harga: 9000000, 
            deskripsi: "Laptop Lenovo untuk produktivitas.", 
            urlFoto: "img/Lenovo.jpg" 
        },
    ];

    return (
        <div>
            <h2>Daftar Produk</h2>
            {products.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nama Produk</th>
                            <th>Harga</th>
                            <th>Deskripsi</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.nama}</td>
                                <td>{product.harga}</td>
                                <td>{product.deskripsi}</td>
                                <td>
                                    <img src={product.urlFoto} alt={product.nama} style={{ width: '100px' }} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Tidak ada produk tersedia.</p>
            )}
        </div>
    );
}

export default Product;
