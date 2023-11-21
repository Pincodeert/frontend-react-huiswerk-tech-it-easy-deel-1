function generateTvTitel(tv) {
    const tvTitel = tv.brand + " " + tv.type + " - " + tv.name;
    return tvTitel;
}

export default generateTvTitel;