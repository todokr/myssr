import { Link, Route, Routes } from "react-router-dom";

const PagePathsWithComponents = import.meta.glob("./pages/*.tsx", {
	eager: true,
});

console.log("Pages", PagePathsWithComponents);

const routes = Object.keys(PagePathsWithComponents).map((path) => {
	const name = path.match(/\.\/pages\/(.*)\.tsx$/)![1];
	console.log(name);
	return {
		name,
		path: name === "Home" ? "/" : `/${name.toLowerCase()}`,
		component: PagePathsWithComponents[path].default,
	};
});

export function App() {
	return (
		<>
			<nav>
				<ul>
					{routes.map(({ name, path }) => {
						return (
							<li key={path}>
								<Link to={path}>{name}</Link>
							</li>
						);
					})}
				</ul>
			</nav>
			<Routes>
				{routes.map(({ path, component: RouteComp }) => {
					return <Route key={path} path={path} element={<RouteComp />} />;
				})}
			</Routes>
		</>
	);
}
