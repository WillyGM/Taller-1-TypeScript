export class TVSerie {
  constructor(
    public id: number,
    public titulo: string,
    public canal: string,
    public numTemporadas: number,
    public descripcion: string,
    public urlSitio: string,
    public urlImagen: string
  ) {}

  public info(): string {
    return `${this.titulo} (${this.canal}) - ${this.numTemporadas} temporada(s)`;
  }
}

  