export class UpdatePostDto {
  public title?: string;
  public description?: string;
  public content: string;
  public userId: string;
  public categories?: number[];
}
