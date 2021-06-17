export default interface IIdentidadRepositoy {
  get(): Promise<boolean>;
}
