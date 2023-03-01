diadasemana = new Array("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
mes = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro")

now = new Date;

document.write("Hoje é " + diadasemana[now.getDay()] + ", " + now.getDate() + " de " + mes[now.getMonth()] + " de " + now.getFullYear() + ". ")

document.write("São " + now.getHours() + " horas, " + now.getMinutes() + " minutos e " + now.getSeconds() + " segundos.")

