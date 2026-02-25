export async function enviarEventoDiscord(evento) {
    // Substitui pelo teu webhook real
    const WEBHOOK_URL = "https://discord.com/api/webhooks/1473842925694750801/BPgcb4hLdBG0PD41DLa_fS6HE0BnNZvkpXWMgNhkAwC7cGpRqumeNfCvXIqbsDX31do4";

    try {
        // Cria a tag do Discord com <@ID>
        const discordMention = evento.discordId ? `<@${evento.discordId}>` : "-";

        // Cria uma mensagem estruturada (Discord Embed)
        const payload = {
            content: `${discordMention} (${evento.playerId}) está participando no evento!`,
            embeds: [
                {
                    title: evento.nome || "Evento Sem Nome",
                    description: evento.descricao || "Sem descrição",
                    color: 0xff3b3b,
                    fields: [
                        { name: "Início", value: evento.inicio || "-", inline: true },
                        { name: "Local", value: evento.local || "-", inline: true },
                        { name: "Recompensa", value: evento.recompensa || "-", inline: true },
                        { name: "Regras", value: evento.regras || "-", inline: false },
                        { name: "Player ID", value: evento.playerId || "-", inline: true },
                        { name: "Discord ID", value: discordMention, inline: true }
                    ],
                    image: evento.imagem ? { url: evento.imagem } : undefined,
                    footer: {
                        text: "Sistema MK Eventos",
                        icon_url: "logoDiscord.webp"
                    },
                    timestamp: new Date().toISOString()
                }
            ]
        };

        const response = await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`Erro ao enviar para Discord: ${response.status}`);
        }

        console.log("Evento enviado para Discord com sucesso!", evento.nome);
        return true;

    } catch (err) {
        console.error("Falha ao enviar evento para Discord:", err);
        return false;
    }
}