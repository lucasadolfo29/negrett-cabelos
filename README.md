# Negrett Cabelos — Site institucional

Site oficial do **Negrett Cabelos**, salão especialista em cabelos crespos, cacheados e ondulados em São José do Rio Preto/SP.

Site estático (HTML, CSS e JavaScript puro) — sem build. Pronto para deploy na Vercel como site estático.

## Estrutura

```
.
├── index.html          # Página única (todas as seções)
├── assets/
│   ├── styles.css      # Estilos (paleta e layout mobile-first)
│   ├── script.js       # Serviços, depoimentos, horários, menu, Trustindex
│   ├── fonts/          # Google Sans (local)
│   └── img/            # Logos, avatar e ícone da marca
```

## Deploy na Vercel

1. Importe este repositório na Vercel.
2. **Framework Preset:** Other · **Build Command:** vazio · **Output Directory:** vazio.
3. Deploy. Pronto — a Vercel serve o `index.html` da raiz.

## Configurações rápidas (em `assets/script.js`)

- `BOOKING_URL` — link de agendamento (Booksy). Todos os botões "Agende seu horário" usam este link.
- `TRUSTINDEX_WIDGET_ID` — ID do widget de avaliações do Google (Trustindex). Já configurado; as avaliações se atualizam sozinhas no domínio publicado.
- `HOURS` — horário de funcionamento por dia.

## Identidade

- **Cores:** terracota `#D99065` · marrom `#5F4641` · verde oliva `#576832`
- **Fonte:** Google Sans
- **Contato:** WhatsApp (11) 96469-4978 · Instagram [@negrettcabelos](https://www.instagram.com/negrettcabelos/)
