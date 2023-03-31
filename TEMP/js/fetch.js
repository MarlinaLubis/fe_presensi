import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://marlinapp.herokuapp.com/presensi";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
}