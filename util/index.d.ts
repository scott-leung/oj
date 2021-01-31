declare module 'util' {
  export class UnionFind {
    private parents: number[];
    private ranks: number[];

    public union(x: number, y: number): void;
    public find(x: number): number;
    public isConnected(x: number, y: number): boolean;
    public getGroupCount(): number;
  }
}
