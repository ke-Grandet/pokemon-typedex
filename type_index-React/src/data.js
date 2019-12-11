const TypeIndex = {
    "types": [
        // 0 普
        {
            "index": 0,
            "name": "普",
            "value": "normal",
            "color": "rgb(180, 180, 163)",
            "description": "一般系",
            "against": {
                "鬼": {"atk": 0, "def": 0},
                "岩": {"atk": 0.5, "def": 1},
                "钢": {"atk": 0.5, "def": 1},
                "格": {"atk": 1, "def": 2}
            }
        },
        // 1 火
        {
            "index": 1,
            "name": "火",
            "value": "fire",
            "color": "rgb(250, 48, 40)",
            "description": "火系",
            "against": {
                "火": {"atk": 0.5, "def": 0.5},
                "龙": {"atk": 0.5, "def": 1},
                "水": {"atk": 0.5, "def": 2},
                "岩": {"atk": 0.5, "def": 2},
                "虫": {"atk": 2, "def": 0.5},
                "草": {"atk": 2, "def": 0.5},
                "冰": {"atk": 2, "def": 0.5},
                "钢": {"atk": 2, "def": 0.5},
                "地": {"atk": 1, "def": 2},
                "妖": {"atk": 1, "def": 0.5},
            }
        },
        // 2 水
        {
            "index": 2,
            "name": "水",
            "value": "water",
            "color": "rgb(53, 148, 250)",
            "description": "水系",
            "against": {
                "水": {"atk": 0.5, "def": 0.5},
                "龙": {"atk": 0.5, "def": 1},
                "草": {"atk": 0.5, "def": 2},
                "火": {"atk": 2, "def": 0.5},
                "地": {"atk": 2, "def": 1},
                "岩": {"atk": 2, "def": 1},
                "电": {"atk": 1, "def": 2},
                "冰": {"atk": 1, "def": 0.5},
                "钢": {"atk": 1, "def": 0.5},
            }
        },
        // 3 电
        {
            "index": 3,
            "name": "电",
            "value": "electric",
            "color": "rgb(253, 195, 67)",
            "description": "电气系",
            "against": {
                "地": {"atk": 0, "def": 2},
                "电": {"atk": 0.5, "def": 0.5},
                "草": {"atk": 0.5, "def": 1},
                "龙": {"atk": 0.5, "def": 1},
                "飞": {"atk": 2, "def": 0.5},
                "水": {"atk": 2, "def": 1},
                "钢": {"atk": 1, "def": 0.5},
            }
        },
        // 4 草
        {
            "index": 4,
            "name": "草",
            "value": "grass",
            "color": "rgb(115, 198, 87)",
            "description": "草系",
            "against": {
                "虫": {"atk": 0.5, "def": 2},
                "毒": {"atk": 0.5, "def": 2},
                "飞": {"atk": 0.5, "def": 2},
                "火": {"atk": 0.5, "def": 2},
                "草": {"atk": 0.5, "def": 0.5},
                "龙": {"atk": 0.5, "def": 1},
                "钢": {"atk": 0.5, "def": 1},
                "地": {"atk": 2, "def": 0.5},
                "水": {"atk": 2, "def": 0.5},
                "岩": {"atk": 2, "def": 1},
                "冰": {"atk": 1, "def": 2},
                "电": {"atk": 1, "def": 0.5},
            }
        },
        // 5 冰
        {
            "index": 5,
            "name": "冰",
            "value": "ice",
            "color": "rgb(116, 220, 253)",
            "description": "冰系",
            "against": {
                "火": {"atk": 0.5, "def": 2},
                "钢": {"atk": 0.5, "def": 2},
                "水": {"atk": 0.5, "def": 1},
                "冰": {"atk": 0.5, "def": 0.5},
                "飞": {"atk": 2, "def": 1},
                "地": {"atk": 2, "def": 1},
                "草": {"atk": 2, "def": 1},
                "龙": {"atk": 2, "def": 1},
                "格": {"atk": 1, "def": 2},
                "岩": {"atk": 1, "def": 2},
            }
        },
        // 6 格
        {
            "index": 6,
            "name": "格",
            "value": "fighting",
            "color": "rgb(177, 72, 64)",
            "description": "格斗系",
            "against": {
                "鬼": {"atk": 0, "def": 1},
                "虫": {"atk": 0.5, "def": 0.5},
                "毒": {"atk": 0.5, "def": 1},
                "飞": {"atk": 0.5, "def": 2},
                "超": {"atk": 0.5, "def": 2},
                "妖": {"atk": 0.5, "def": 2},
                "普": {"atk": 2, "def": 1},
                "岩": {"atk": 2, "def": 0.5},
                "冰": {"atk": 2, "def": 1},
                "钢": {"atk": 2, "def": 1},
                "恶": {"atk": 2, "def": 0.5}
            }
        },
        // 7 毒
        {
            "index": 7,
            "name": "毒",
            "value": "poison",
            "color": "rgb(159, 75, 142)",
            "description": "毒系",
            "against": {
                "钢": {"atk": 0, "def": 1},
                "毒": {"atk": 0.5, "def": 0.5},
                "地": {"atk": 0.5, "def": 2},
                "岩": {"atk": 0.5, "def": 1},
                "鬼": {"atk": 0.5, "def": 1},
                "草": {"atk": 2, "def": 0.5},
                "妖": {"atk": 2, "def": 0.5},
                "超": {"atk": 1, "def": 2},
                "虫": {"atk": 1, "def": 0.5},
                "格": {"atk": 1, "def": 0.5},
            }
        },
        // 8 地
        {
            "index": 8,
            "name": "地",
            "value": "ground",
            "color": "rgb(216, 178, 87)",
            "description": "地面系",
            "against": {
                "飞": {"atk": 0, "def": 1},
                "虫": {"atk": 0.5, "def": 1},
                "草": {"atk": 0.5, "def": 2},
                "毒": {"atk": 2, "def": 0.5},
                "火": {"atk": 2, "def": 1},
                "电": {"atk": 2, "def": 0},
                "岩": {"atk": 2, "def": 0.5},
                "钢": {"atk": 2, "def": 1},
                "水": {"atk": 1, "def": 2},
                "冰": {"atk": 1, "def": 2},
            }
        },
        // 9 飞
        {
            "index": 9,
            "name": "飞",
            "value": "flying",
            "color": "rgb(95, 147, 250)",
            "description": "飞行系",
            "against": {
                "电": {"atk": 0.5, "def": 2},
                "岩": {"atk": 0.5, "def": 2},
                "钢": {"atk": 0.5, "def": 1},
                "虫": {"atk": 2, "def": 0.5},
                "格": {"atk": 2, "def": 0.5},
                "草": {"atk": 2, "def": 0.5},
                "地": {"atk": 1, "def": 0},
                "冰": {"atk": 1, "def": 2},
            }
        },
        // 10 超
        {
            "index": 10,
            "name": "超",
            "value": "psychic ",
            "color": "rgb(250, 69, 142)",
            "description": "超能力系",
            "against": {
                "恶": {"atk": 0, "def": 2},
                "超": {"atk": 0.5, "def": 0.5},
                "钢": {"atk": 0.5, "def": 1},
                "毒": {"atk": 2, "def": 1},
                "格": {"atk": 2, "def": 0.5},
                "虫": {"atk": 1, "def": 2},
                "鬼": {"atk": 1, "def": 2},
            }
        },
        // 11 虫
        {
            "index": 11,
            "name": "虫",
            "value": "bug",
            "color": "rgb(163, 179, 53)",
            "description": "虫系",
            "against": {
                "毒": {"atk": 0.5, "def": 1},
                "飞": {"atk": 0.5, "def": 2},
                "格": {"atk": 0.5, "def": 0.5},
                "火": {"atk": 0.5, "def": 2},
                "鬼": {"atk": 0.5, "def": 1},
                "钢": {"atk": 0.5, "def": 1},
                "妖": {"atk": 0.5, "def": 1},
                "草": {"atk": 2, "def": 0.5},
                "超": {"atk": 2, "def": 1},
                "恶": {"atk": 2, "def": 1},
                "岩": {"atk": 1, "def": 2},
                "地": {"atk": 1, "def": 0.5},
            }
        },
        // 12 岩
        {
            "index": 12,
            "name": "岩",
            "value": "rock",
            "color": "rgb(179, 160, 99)",
            "description": "岩石系",
            "against": {
                "地": {"atk": 0.5, "def": 2},
                "格": {"atk": 0.5, "def": 2},
                "钢": {"atk": 0.5, "def": 2},
                "虫": {"atk": 2, "def": 1},
                "飞": {"atk": 2, "def": 0.5},
                "火": {"atk": 2, "def": 0.5},
                "冰": {"atk": 2, "def": 1},
                "水": {"atk": 1, "def": 2},
                "草": {"atk": 1, "def": 2},
                "普": {"atk": 1, "def": 0.5},
                "毒": {"atk": 1, "def": 0.5},
            }
        },
        // 13 鬼
        {
            "index": 13,
            "name": "鬼",
            "value": "ghost",
            "color": "rgb(93, 95, 176)",
            "description": "幽灵系",
            "against": {
                "普": {"atk": 0, "def": 0},
                "恶": {"atk": 0.5, "def": 2},
                "超": {"atk": 2, "def": 1},
                "鬼": {"atk": 2, "def": 2},
                "虫": {"atk": 1, "def": 0.5},
                "毒": {"atk": 1, "def": 0.5},
                "格": {"atk": 1, "def": 0},
            }
        },
        // 14 龙
        {
            "index": 14,
            "name": "龙",
            "value": "dragon",
            "color": "rgb(108, 97, 230)",
            "description": "龙系",
            "against": {
                "妖": {"atk": 0, "def": 2},
                "钢": {"atk": 0.5, "def": 1},
                "龙": {"atk": 2, "def": 2},
                "冰": {"atk": 1, "def": 2},
                "火": {"atk": 1, "def": 0.5},
                "水": {"atk": 1, "def": 0.5},
                "电": {"atk": 1, "def": 0.5},
                "草": {"atk": 1, "def": 0.5},
            }
        },
        // 15 恶
        {
            "index": 15,
            "name": "恶",
            "value": "dark",
            "color": "rgb(108, 76, 63)",
            "description": "恶系",
            "against": {
                "格": {"atk": 0.5, "def": 2},
                "恶": {"atk": 0.5, "def": 0.5},
                "妖": {"atk": 0.5, "def": 2},
                "超": {"atk": 2, "def": 0},
                "鬼": {"atk": 2, "def": 0.5},
                "虫": {"atk": 1, "def": 2},
            }
        },
        // 16 钢
        {
            "index": 16,
            "name": "钢",
            "value": "steel",
            "color": "rgb(162, 162, 179)",
            "description": "钢系",
            "against": {
                "水": {"atk": 0.5, "def": 1},
                "火": {"atk": 0.5, "def": 2},
                "电": {"atk": 0.5, "def": 1},
                "钢": {"atk": 0.5, "def": 0.5},
                "冰": {"atk": 2, "def": 0.5},
                "岩": {"atk": 2, "def": 0.5},
                "妖": {"atk": 2, "def": 0.5},
                "地": {"atk": 1, "def": 2},
                "格": {"atk": 1, "def": 2},
                "普": {"atk": 1, "def": 0.5},
                "虫": {"atk": 1, "def": 0.5},
                "飞": {"atk": 1, "def": 0.5},
                "草": {"atk": 1, "def": 0.5},
                "超": {"atk": 1, "def": 0.5},
                "龙": {"atk": 1, "def": 0.5},
                "毒": {"atk": 1, "def": 0},
            }
        },
        // 17 妖
        {
            "index": 17,
            "name": "妖",
            "value": "fairy",
            "color": "rgb(252, 161, 251)",
            "description": "妖精系",
            "against": {
                "毒": {"atk": 0.5, "def": 2},
                "火": {"atk": 0.5, "def": 1},
                "钢": {"atk": 0.5, "def": 2},
                "格": {"atk": 2, "def": 0.5},
                "龙": {"atk": 2, "def": 0},
                "恶": {"atk": 2, "def": 0.5},
                "虫": {"atk": 1, "def": 0.5},
            }
        },
        // 18 ？
        // {
        //     "index": 18,
        //     "name": "？",
        //     "value": "???",
        //     "color": "rgb(98, 152, 135)",
        //     "description": "???",
        //     "against": {}
        // },
    ]
};

export default TypeIndex;