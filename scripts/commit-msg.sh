COMMIT_MESSAGE=$(cat $1)

VALID_FORMAT="^(feature|fix|tech|chore|refactor|test):[[:space:]].*$"

if [[ $COMMIT_MESSAGE =~ $VALID_FORMAT ]];
then
  echo "🎉🎉🎉 提交信息校验通过 🎉🎉🎉"
  exit 0
else
  echo "请输入有效的提交信息: $COMMIT_MESSAGE"
  exit 1
fi
