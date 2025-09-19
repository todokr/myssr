import ReactDOMServer from "react-dom/server";
import { Location, StaticRouter } from "react-router-dom";
import { App } from "./App";

export function SSRRender(url: string | Partial<Location>) {
	const rendered = ReactDOMServer.renderToString(
		<StaticRouter location={url}>
			<App />
		</StaticRouter>,
	);
	console.log("== Rendered ==============================================");
	console.log(rendered);
	console.log();
	return rendered;
}
