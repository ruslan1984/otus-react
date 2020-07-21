import Scope from "./Scope";
import Geometric from "./Geometric";
import Parse from "./Parse";
import Polish from "./Polish";

export default class app {
    static main(str: string): string {
        if (str === "") {
            return "";
        }
        str = str.trim();
        const lastSim = str.toString().slice(-1);
        const regexp = /(\d|\(|\))/g;
        if (lastSim.match(regexp)) {
            return this.norm(str);
        } else {
            return this.polish(str);
        }
    }
    static polish(str: string): string {
        const polish = new Polish(str);
        return String(polish.parse());
    }
    static norm(str: string): string {
        const geometric = new Geometric();
        const scope = new Scope();
        const parse = new Parse();
        geometric.setString(str);
        const geom: string = geometric.parse();
        scope.setString(geom);
        const sc: string = scope.parseAll();
        parse.setString(sc);
        const res: number = parse.parse();
        return String(res);
    }
}
