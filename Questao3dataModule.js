function caculateAge(data){
    var d = new Date
    var anosDiferenca = d.getFullYear() - ano
    if((d.getMonth() < mes) || (d.getMonth() == mes) && (d.getDate() < dia)){
        anosDiferenca = anosDiferenca - 1
    }
    return anosDiferenca
}

export default caculateAge;