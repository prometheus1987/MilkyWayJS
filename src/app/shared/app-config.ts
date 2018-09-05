export class AppConfig {
  public static key: string = '';
  public static cameras: string[] = undefined;
  public static rovers: string[] = undefined;

  url: string;

  returntNasaUrl() {
    const url = 'https://api.nasa.gov';
    return url;
  }

  returnMarsUrl() {
    const url = 'https://mars-photos.herokuapp.com';
    return url;
  }

  returnSpacexUrl() {
    const url = 'https://api.spacexdata.com';
    return url;
  }
}
