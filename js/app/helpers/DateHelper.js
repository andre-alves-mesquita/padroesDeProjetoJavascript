class DateHelper {
  static inputParaFormatoValido(data, formato) {
    return moment(data).format(formato);
  }

  static dividirData(data) {
    let stringSplit = data.split("-");
    return [stringSplit[0], stringSplit[1], stringSplit[2]];
  }
}
