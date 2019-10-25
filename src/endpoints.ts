const baseUrl = "https://jsonplaceholder.typicode.com/users"

export default {
	getUsers: baseUrl,
	getUser: (id: string) => `${baseUrl}/${id}`,
};
