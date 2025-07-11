import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const privileges = [
    {
      id: 1,
      name: "VIP",
      price: "299₽",
      features: [
        "Привилегии в чате",
        "Дополнительные команды",
        "Приоритет входа",
      ],
      color: "bg-yellow-400",
      popular: false,
    },
    {
      id: 2,
      name: "PREMIUM",
      price: "599₽",
      features: [
        "Все VIP привилегии",
        "Личный дом",
        "Телепортация",
        "Fly режим",
      ],
      color: "bg-orange-400",
      popular: true,
    },
    {
      id: 3,
      name: "ELITE",
      price: "999₽",
      features: [
        "Все PREMIUM привилегии",
        "Креативный режим",
        "WorldEdit",
        "Админ команды",
      ],
      color: "bg-amber-500",
      popular: false,
    },
  ];

  const cases = [
    {
      id: 1,
      name: "Обычный кейс",
      price: "99₽",
      description: "Базовые предметы и ресурсы",
      image: "/img/af1a0469-a045-4e95-a16c-5524cdc263b7.jpg",
    },
    {
      id: 2,
      name: "Редкий кейс",
      price: "299₽",
      description: "Редкие предметы и броня",
      image: "/img/af1a0469-a045-4e95-a16c-5524cdc263b7.jpg",
    },
    {
      id: 3,
      name: "Легендарный кейс",
      price: "599₽",
      description: "Эпические предметы и оружие",
      image: "/img/af1a0469-a045-4e95-a16c-5524cdc263b7.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black py-6 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-yellow-400" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-wider">
                  MINECRAFT STORE
                </h1>
                <p className="text-sm opacity-80">Лучший сервер для игры</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge
                variant="secondary"
                className="bg-black text-yellow-400 px-4 py-2"
              >
                Онлайн: 247
              </Badge>
              <Button className="bg-black text-yellow-400 hover:bg-gray-800">
                <Icon name="Users" size={16} className="mr-2" />
                Войти на сервер
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Добро пожаловать в наш магазин!
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Получи уникальные привилегии, кейсы и игровую валюту
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">1000+</div>
              <div className="text-gray-600">Активных игроков</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">50+</div>
              <div className="text-gray-600">Уникальных предметов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">24/7</div>
              <div className="text-gray-600">Поддержка</div>
            </div>
          </div>
        </section>

        {/* Привилегии */}
        <section className="mb-16">
          <h3 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            🏆 Привилегии
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {privileges.map((privilege) => (
              <Card
                key={privilege.id}
                className={`relative transform hover:scale-105 transition-all duration-300 border-2 ${privilege.popular ? "border-orange-400 shadow-xl" : "border-gray-200"}`}
              >
                {privilege.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-400 text-black">
                    Популярное
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 ${privilege.color} rounded-full mx-auto mb-4 flex items-center justify-center`}
                  >
                    <Icon name="Crown" size={32} className="text-black" />
                  </div>
                  <CardTitle className="text-2xl">{privilege.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-gray-800">
                    {privilege.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {privilege.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Icon
                          name="Check"
                          size={16}
                          className="text-green-500 mr-2"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${privilege.color} text-black hover:opacity-80`}
                  >
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Купить
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Кейсы */}
        <section className="mb-16">
          <h3 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            📦 Кейсы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cases.map((caseItem) => (
              <Card
                key={caseItem.id}
                className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="w-full h-40 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={caseItem.image}
                      alt={caseItem.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{caseItem.name}</CardTitle>
                  <CardDescription>{caseItem.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">
                    {caseItem.price}
                  </span>
                  <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                    <Icon name="Package" size={16} className="mr-2" />
                    Открыть
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Донатная валюта */}
        <section className="mb-16">
          <h3 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            💰 Донатная валюта
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { amount: "100", price: "99₽", bonus: "" },
              { amount: "250", price: "199₽", bonus: "+50 бонус" },
              { amount: "500", price: "399₽", bonus: "+100 бонус" },
              { amount: "1000", price: "699₽", bonus: "+200 бонус" },
            ].map((currency, index) => (
              <Card
                key={index}
                className="text-center transform hover:scale-105 transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <img
                      src="/img/1d324b0a-c414-4a75-a884-cb3b74c08270.jpg"
                      alt="Coin"
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                  <CardTitle className="text-xl">
                    {currency.amount} монет
                  </CardTitle>
                  {currency.bonus && (
                    <Badge className="bg-green-500">{currency.bonus}</Badge>
                  )}
                </CardHeader>
                <CardFooter>
                  <Button className="w-full bg-orange-400 text-black hover:bg-orange-500">
                    {currency.price}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Прочее */}
        <section className="mb-16">
          <h3 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            ⚡ Прочее
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Смена ника", price: "199₽", icon: "Edit" },
              { name: "Приватная зона", price: "299₽", icon: "Lock" },
              { name: "Кастомный скин", price: "399₽", icon: "Palette" },
              { name: "Эффекты частиц", price: "499₽", icon: "Sparkles" },
            ].map((item, index) => (
              <Card
                key={index}
                className="text-center transform hover:scale-105 transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon
                      name={item.icon as any}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full bg-purple-400 text-white hover:bg-purple-500">
                    {item.price}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h4 className="text-xl font-bold mb-2">Присоединяйся к нам!</h4>
            <p className="text-gray-300">IP сервера: play.minecraft-store.ru</p>
          </div>
          <div className="flex justify-center space-x-6">
            <Button variant="outline" size="sm">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Discord
            </Button>
            <Button variant="outline" size="sm">
              <Icon name="Send" size={16} className="mr-2" />
              Telegram
            </Button>
            <Button variant="outline" size="sm">
              <Icon name="Youtube" size={16} className="mr-2" />
              YouTube
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
