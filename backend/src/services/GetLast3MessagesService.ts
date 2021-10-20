import prismaClient from "../prisma";

class GetLast3MessagesServices {
    async execute() {
        const messages = await prismaClient.message.findMany({
            take: 3,
            orderBy: {
                created_at: "desc",
            },
            include: {
                user: true,
            },
        });
    }
}

export { GetLast3MessagesServices };
