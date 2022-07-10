import { HandlerContext } from "$fresh/server.ts";
import { Pool } from "https://deno.land/x/postgres@v0.16.1/mod.ts";

const databaseUrl = Deno.env.get("DATABASE_URL")!;
if (!databaseUrl) {
	throw new Error("DATABASE_URL is not set");
}
const pool = new Pool(databaseUrl, 3, true);

// deno-lint-ignore no-explicit-any
function replacer(_key: any, value: any) {
	if (typeof value === "bigint") {
		return value.toString();
	}
	return value;
}

export const handler = async (
	_req: Request,
	_ctx: HandlerContext
): Promise<Response> => {
	const connection = await pool.connect();
	try {
		switch (_req.method) {
			case "GET": {
				// This is a GET request. Return a list of all meeting events.
				// Run the query
				const result = await connection.queryObject`
					SELECT 
					id,
					dao,
					name,
					created_at,
					description,
					image,event_url,
					zoom_url,
					token,
					start_date,
					start_time,
					repeat
					slots,
					attendants,
					location,
					contact,
					weekends FROM meetevents
		  		`;

				// Encode the result as JSON
				const body = JSON.stringify(result.rows, replacer, 2);

				// Return the result as JSON
				return new Response(body, {
					headers: { "content-type": "application/json" },
				});
			}
			case "POST": {
				// This is a POST request. Create a new event.
				// Parse the request body as JSON. If the request body fails to parse,
				// is not a string, or is longer than 256 chars, return a 400 response.
				const values = await _req.json().catch(() => null);
				if (!values || typeof values !== "object") {
					return new Response("Bad Request", { status: 400 });
				}
				console.log(values);
				// Insert the new event into the database
/* 				await connection.queryObject`
					INSERT INTO meetevents (id,
						dao,
						name,
						created_at,
						description,
						image,event_url,
						zoom_url,
						token,
						start_date,
						start_time,
						repeat
						slots,
						attendants,
						location,
						contact,
						weekends) VALUES (${values})
				`; */

				// Return a 201 Created response
				return new Response("", { status: 201 });
			}
			default: // If this is neither a POST, or a GET return a 405 response.
				return new Response("Method Not Allowed", { status: 405 });
		}
	} catch (err) {
		console.error(err);
		// If an error occurs, return a 500 response
		return new Response(`Internal Server Error\n\n${err.message}`, {
			status: 500,
		});
	} finally {
		// Release the connection back into the pool
		connection.release();
	}
};
