// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: "tags",
  foreignKey: "product_id",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: "products",
  foreignKey: "tag_id",
});

// User.belongsToMany(Post, {
//   through: Vote,
//   as: 'voted_posts',
//   foreignKey: 'user_id'
// });

// Post.belongsToMany(User, {
//   through: Vote,
//   as: 'voted_posts',
//   foreignKey: 'post_id'
// });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
