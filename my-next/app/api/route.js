export async function POST() {
    let data = [{
        "npm" : "2327250026",
        "nama" : "brian"
    },
    {
        "npm" : "2327250027",
        "nama" : "Json"
    },
    ];

    return Response.json(data);
    
}