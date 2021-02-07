export class IptuDetalhesModel {
  public Id: number;
  public Nome: string;
  public Documento: string;
  public Logradouro: string;
  public Cep: string;
  public Tipo: string;
  public Ano: number;
  public Valor: number;
  public OpcoesPagamento: IptuDetalhesOpcoesModel[];
}
export class IptuDetalhesOpcoesModel {
  public DataVencimento: string;
  public ValorTotal: number;
  public ValorParcela: number;
  public Quantidade: number;
}