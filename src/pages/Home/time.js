export const getTime = (toIsoString) => {
    const data = new Date(toIsoString);
    const horas = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();

    const hhmmmss = [horas, minutos, segundos].join(':');
    return hhmmmss;
}